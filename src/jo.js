const names = [
    "고라희", "김단아", "김민성", "김민우", 
    "김정민", "박대호", "박민성", "박민희", 
    "박재린", "심규혁", "안우용", "우지영", 
    "윤채영", "이경민", "이동혁", "이영진", 
    "임성현", "전승민", "정수민", "주현성", "최원규"];

const groups = [];

for (let i = 0; i < names.length; i += 4) {
    const group = shuffle(names.slice(i, i + 4));
    groups.push(group);
}

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    return array;
  }
    
console.log(groups);
