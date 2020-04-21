// ! Dont forget to wait for DOM content to be available
function init() {
  const trainList = document.getElementById('tube-list')
  async function getTrainData(){
 
    try {
      const trainData = await fetch('https://api.tfl.gov.uk/line/mode/tube/status')
      const trainDataObj = await trainData.json()
      console.log(trainDataObj)
      displayData(trainDataObj)

    } catch (err) {
      console.log(err)

    }
  }


  getTrainData()


  function displayData(trainInfo){

    const trainHTML = trainInfo.map(line => {

      let serviceClass

      switch (line.lineStatuses[0].statusSeverity){
        case 0:
          serviceClass = 'goodService'
          break
        case 1:
          serviceClass = 'goodService'
          break
        case 2:
          serviceClass = 'warningService'
          break
        case 3:
          serviceClass = 'warningService'
          break
        default:
          serviceClass = 'badService'
      }

      return (
        `<li >
        <h4 class="lineName">${line.name}</h4>
        <p class="${serviceClass}">${line.lineStatuses[0].statusSeverityDescription}</p>
        <p class="description">${line.lineStatuses[0].disruption.description}</p>
        </li>`
      )
    })

    trainList.innerHTML = trainHTML.join('')
  }
}

window.addEventListener('DOMContentLoaded',init)