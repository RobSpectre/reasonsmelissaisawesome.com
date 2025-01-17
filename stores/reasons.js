import { nextTick } from 'vue'

import { defineStore } from 'pinia'

import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore'

export const useReasons = defineStore('reasons', {
  state: () => ({
    reasons: [],
    unsubscribe: null
  }),
  actions: {
    subscribeToReasons() {
      const { $db } = useNuxtApp()
      
      // If already subscribed, unsubscribe first
      if (this.unsubscribe) {
        this.unsubscribe()
      }

      // Set up real-time listener
      this.unsubscribe = onSnapshot(collection($db, 'reasons'), (snapshot) => {
        this.reasons = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      }, (error) => {
        console.error('Firestore subscription error:', error)
      })
    },

    // Clean up function to remove listener
    unsubscribeFromReasons() {
      if (this.unsubscribe) {
        this.unsubscribe()
        this.unsubscribe = null
      }
    },
    async addReason (reason) {
      const { $db } = useNuxtApp()

      const doc = {
        text: reason,
        deleted: false,
        moderated: false
      }

      const docref = await addDoc(collection($db, 'reasons'), doc)

      this.reasons.push({ id: docref.id, ...doc })
    },
    async updateReason(id, updates) {
      const { $db } = useNuxtApp()

      // update in firebase
      const reasonRef = doc($db, 'reasons', id)
      await updateDoc(reasonRef, updates)

      // update pinia store
      const index = this.reasons.findIndex((reason) => reason.id === id)
      if (index !== -1) {
        this.reasons[index] = { ...this.reasons[index], ...updates }
      }
    },   
    async deleteReason(id) {
      const { $db } = useNuxtApp()

      // delete in firebase
      const docRef = doc($db, 'reasons', id)
      await deleteDoc(docRef)

      // delete from pinia store
      this.reasons = this.reasons.filter(reason => reason.id !== id)
    }
  }
})
