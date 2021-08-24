function add(a: number, b: number): number {
  return a + b;
}
//(a:type,b:type) :type- какой должна вернуть функция

function toUpperCaseee(str: string): string {
  return str.trim().toLocaleUpperCase();
}


// Rreact.fc это функциональный компонент 
// import React from 'react';
// const TodoForm: React.FC = () => {
//     return (<div>555</div>)
// }



//немного html
// <input type='text' id="title"/>
// <label htmlFro='title' className='active'>
// теги выше имеют общий 'title' для того чтобы связать их вместе, 
// так как HTML тег <label> (в переводе с англ. - метка) определяет текстовую метку для элемента <input>.

// Атрибут for используется в метках. Он ссылается на идентификатор элемента, с которым связана эта метка.