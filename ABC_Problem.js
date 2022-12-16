const canMakeWord = (word) => {
    const blocksArr = [
        ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
        ["G", "T"], ["R", "E"], ["T", "G"], ["Q", "D"], ["F", "S"],
        ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"],
        ["E", "R"], ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"],
      ];

      word = word.toUpperCase().split('');
      console.log(word)

      for (let i = 0; i < word.length; i++) {
        
        const blockIndex = blocksArr.findIndex((block) => block.indexOf(word[i]) >= 0);
        console.log(blockIndex);
        if (blockIndex === -1) {
            return false;
        } else {
            blocksArr.splice(blockIndex, 1);
            console.log(blocksArr);
        }
      }
      return true;
}

console.log(canMakeWord("TReAT"));