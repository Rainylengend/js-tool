let jsonIfElse = ({flag, trueConf, falseConf}) => {
  let val

  if(trueConf.next && flag) {
    val = jsonIfElse(trueConf.next)
  }

  if(falseConf.next && !flag){
    val = jsonIfElse(falseConf.next)
  }

  if(!trueConf.next && flag){
    val = trueConf.name
  }

  if(!falseConf.next && !flag){
    val = falseConf.name
  }

  return val
}
