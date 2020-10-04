
let wv = new WebView()
var day = new Date()
day = day.getDay()
day--

if (day>=4 || day<0){
  day = 4
}
let url = "https://eatery.nero2k.com"
let js = "document.getElementsByClassName('media-body')[" + day + "].innerHTML;"

let lunchFont = new Font("ArialMT", 12)

await wv.loadURL(url)
let data = await wv.evaluateJavaScript(js)

data = data.replace('<strong class="d-block text-gray-dark">', '')
data = data.replace('</strong>','')
data = data.replace(/\<br\>/g, '\n')
data = data.trim()
log(data)

let widget = createWidget()

  
  if (config.runsInWidget){
  Script.setWidget(widget)
  Script.complete()
}

function createWidget(){
  let w = new ListWidget()
  let Title = w.addText("SSIS Lunchmeny")
  
  
  let lunch = w.addText(data)
  
  lunch.font = lunchFont
  Title.centerAlignText()
  return w
}
