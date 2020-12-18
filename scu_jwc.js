const data = await fetchData()
const widget = createWidget(data)
Script.setWidget(widget)
Script.complete()
function createWidget(data) {// 
// console.log(data)
const w = new ListWidget()

const bgColor = new LinearGradient()
bgColor.colors = [new Color("#29323c"), new Color("#1c1c1c")]
bgColor.locations = [0.0, 1.0]
w.backgroundGradient = bgColor
w.setPadding(12, 15, 15, 12)
w.spacing = 6

const firstLine = w.addText(`ios教务处公告小助手`)
firstLine.textColor = Color.white()
firstLine.textOpacity = 0.7
firstLine.font = new Font("Lobster Two", 14)
body_array = [data]

console.log(body_array)
body_array.slice(0, 5).map(d => {
  for(var i=1;i<6;i++){
    const cell = w.addStack()
    cell.centerAlignContent()
    const cell_box = cell.addStack()
    cell_box.size = new Size(3, 15)
    cell_box.backgroundColor = new Color('#ff837a', 0.6)
    cell.addSpacer(10)
    var index = (i).toString()
    const cell_text = cell.addText(d[index][0])
    
    cell_text.font = Font.lightSystemFont(14)
    cell.url = d[index][1]
    if(i<5){cell.addSpacer()}
    if(i<5){
    w.addSpacer(10)}
  }
  })
  w.addSpacer()
  return w

}

async function fetchData() {
const url = `http://47.110.248.228/scu_jwc.json`
const request = new Request(url)
const res = await request.loadJSON()
return res
}

function actionOpenUrl (url) {
    Safari.openInApp(url, false)
}
async function render (data) {
    let w = new ListWidget()
    await renderHeader(w,data)
    const t = w.addText(data['content'])
    t.font = Font.lightSystemFont(16)
    w.addSpacer()
    w.url = 'http://zhjw.scu.edu.cn/login'
    return w
  }
