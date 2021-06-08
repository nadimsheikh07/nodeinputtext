// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const fs = require('fs')

export default class FileManagesController {
  public async input1 ({ request }) {
    // bind file to array
    let input1Json='[]'
    if (fs.existsSync('input1.json')) {
      input1Json = await fs.readFileSync('input1.json')
    }
    let input2Json='[]'
    if (fs.existsSync('input2.json')) {
      input2Json = await fs.readFileSync('input2.json')
    }

    let input1=JSON.parse(input1Json)
    let input2=JSON.parse(input2Json)

    if(!input1.includes(request.param('id'))){
      input1.push(request.param('id'))
    }
    // create input json to manage state
    await fs.writeFileSync('input1.json', JSON.stringify(input1))

    // binding array
    let output=[]
    for (let i = 0; i < input1.length; i++) {
      if(i % 2 === 0){
        if(input1[i]){
          output.push(input1[i])
        }
      }else{
        if(input2[i]){
          output.push(input2[i])
        }
      }
    }

    // bind output text
    let outputText=''

    output.forEach(element => {
      outputText+=`${element}\n`
    })

    await fs.writeFileSync('output1.txt', outputText)
    return {
      message: 'Input 1 Successfully',
    }
  }
  public async input2 ({ request }) {
    // bind file to array
    let input1Json='[]'
    if (fs.existsSync('input1.json')) {
      input1Json = await fs.readFileSync('input1.json')
    }
    let input2Json='[]'
    if (fs.existsSync('input2.json')) {
      input2Json = await fs.readFileSync('input2.json')
    }

    let input1=JSON.parse(input1Json)
    let input2=JSON.parse(input2Json)

    if(!input2.includes(request.param('id'))){
      input2.push(request.param('id'))
    }
    // create input json to manage state
    await fs.writeFileSync('input2.json', JSON.stringify(input2))

    // binding array
    let output=[]
    for (let i = 0; i < input2.length; i++) {
      if(input2[i]){
        output.push(input2[i] any)
      }
      if(input1){
        if(input1[i]){
          output.push(input1[i])
        }
      }
    }

    // bind output text
    let outputText=''

    output.forEach(element => {
      outputText+=`${element}\n`
    })

    await fs.writeFileSync('output2.txt', outputText)

    return {
      message: 'Input 2 Successfully',
    }
  }
}
