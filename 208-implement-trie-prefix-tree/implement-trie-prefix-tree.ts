class Trie {
  trie: { [key: string]: {} | null }
    constructor() {
      this.trie = {}
    }

    insert(word: string): void {
      let d = this.trie

      for(let c of word) {
        if(!d[c]) {
          d[c] = {}
        }
        d = d[c]
      }

      d['.'] = '.'
    }

    search(word: string): boolean {
      let d = this.trie

      for(let c of word) {
        if(!d[c]) {
          return false
        }
        d = d[c]
      }

      return !!d['.']
    }

    startsWith(prefix: string): boolean {
      let d = this.trie

      for(let c of prefix) {
        if(!d[c]) {
          return false
        }
        d = d[c]
      }

      return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */