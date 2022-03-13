  const arrow = document.querySelector('.arrow');
  const mainBlock = document.querySelector('.projects__title');
  const plus = document.querySelector('.projects__plus')
  if (mainBlock&&arrow) {
       mainBlock.addEventListener('click', (e) => {
          if (!(e.target  as HTMLElement).closest('.projects__plus')){
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
