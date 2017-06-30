function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks=document.querySelectorAll('main .ranked-list')
  for(let i=0; i<ranks.length;i++){
    ranks[i].innerHTML=parseInt(ranks[i].innerHTML)+n
  }
}

function deepestChild(){
  var deepest=document.querySelector('div#grand-node')

  while(deepest.children[0]){
    deepest=deepest.children[0]
  }
  return deepest

}
