//styled component 

const Title = ({children}) => {
    return (<StyledTitle>
        {children}
    </StyledTitle>
 )
}
export default Title;

передавать надо именно {children} , для того, чтобы в испортируемом файл добавлять внутрь текст и его отображало 

const StyledTitle = styled.h1`
color: ${props=>props.color || "Indigo"};

`
const Title = (props) => {
    return (<StyledTitle {...props}/>
 )
}

export default Title;

Но вот запись актуальная, где используем возможности ES6