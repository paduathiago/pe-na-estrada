export default function erroPrinter(err){
  if(err.response)
    if(err.response.data)
      console.log(err.response.data)
    else
      console.log(err.response)
  else
    console.log(err)
}