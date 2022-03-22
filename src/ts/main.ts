import "../styles/index.less";

import "../assets/icons/add.svg";
import "../assets/icons/close.svg";
import "../assets/icons/edit.svg";
import "../assets/icons/inbox.svg";
import "../assets/icons/mark-checkbox-none.svg";
import "../assets/icons/mark-checkbox.svg";
import "../assets/icons/mark.svg";
import "../assets/icons/priority.svg";
import "../assets/icons/priority1.svg";
import "../assets/icons/priority2.svg";
import "../assets/icons/priority3.svg";
import "../assets/icons/project-circle.svg";
import "../assets/icons/project.svg";
import "../assets/icons/check-box.svg";
import "../assets/icons/date-min.svg";
import "../assets/icons/flag-1.svg";
import "../assets/icons/flag-2.svg";
import "../assets/icons/flag-3.svg";
import "../assets/icons/label-big.svg";
import "../assets/icons/label-min.svg";
import "../assets/icons/open-teg-mark.svg";
import "../assets/icons/plus-project.svg";

  const arrow = document.querySelector('.arrow')
  const mainBlock = document.querySelector('.projects__title')
  const inputBlock:HTMLElement = document.querySelector('.input')
  const inputElem:HTMLInputElement = document.querySelector('.input__tag')
  const parentBlock:HTMLElement = document.querySelector('.projects')

let i =0

  inputElem.addEventListener('keyup', (e)=>{

    if(e.key==='Enter'){
      if(localStorage.getItem('projectsArr')){
        localStorage.setItem('projectsArr', JSON.stringify([...JSON.parse(localStorage.getItem('projectsArr')), {id:i, text:inputElem.value}]))
      } else {
        localStorage.setItem('projectsArr', JSON.stringify([{id:i, text:inputElem.value}]))
      }
      i++
      
      const arrDiv = JSON.parse(localStorage.getItem('projectsArr'))
      // arrDiv.forEach(item=>{
      //   const x = document.createElement('div')
      //   const el = document.createElement('div')
      //   el.classList.add('projects__item')
      //   el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg> ${inputElem.value}`
      //   x.append(el)
      //   parentBlock.append(x)
      // })

      const el = document.createElement('div')
      el.classList.add('projects__item')
      el.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg> ${inputElem.value}`
      parentBlock.append(el)
      inputBlock.style.opacity = '0'
      inputElem.value=''

    }
  })

  if (mainBlock&&arrow) {
       mainBlock.addEventListener('click', (e) => {
          if (!(e.target  as HTMLElement).closest('.projects__plus')){
            // inputBlock.style.display = 'none'
            inputBlock.style.opacity = '0'
            inputElem.value=''
            arrow.classList.toggle('arrow_rotate');
            const items = document.querySelectorAll<HTMLElement>('.projects__item');
            
            if (arrow.classList.contains('arrow_rotate')){
                for (let item of items) {
                item.style.opacity = '0'
              }
            } else {
                for (let item of items) {
                item.style.opacity = '1'
              }
            }
       } else {
        //  inputBlock.style.display = 'block'
         inputBlock.style.opacity = '1'
       }
  })
  }

//   const arrow = document.querySelector('.arrow');
//   const mainBlock = document.querySelector('.projects__title');
//   const plus = document.querySelector('.projects__plus')

//   const hideElem = (mainBlock:Element, arrow:Element, limitElem:string, findElem:string)=>{
//     if (mainBlock&&arrow) {
//       mainBlock.addEventListener('click', (e) => {
//          if (!(e.target  as HTMLElement).closest(limitElem)){
//            arrow.classList.toggle('arrow_rotate');
//            const items = document.querySelectorAll<HTMLElement>(findElem);
   
//            if (arrow.classList.contains('arrow_rotate')){
//                for (let item of items) {
//                item.style.opacity = '0'
//              }
//            } else {
//                for (let item of items) {
//                item.style.opacity = '1'
//              }
//            }
//       }
//  })
//  }
//   }

//   hideElem(mainBlock, arrow, '.projects__plus', '.projects__item'  )


