import { useState} from 'react'

const todoform = ( addtodo ) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState ("");

    const handleSubit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addtodo(value, category);
        setValue("")
        setCategory("")
        console.log(value, category);

    };
    
    return (
    <div classname="todo-form">
        <h2>criar tarefa:</h2>
        <form>
            <imput type="text" 
            placeholder="digite o título" 
            value={value}
            onChange ={(e) => setValue(e.target.value)}/>
            
            <select value={category} 
            onChange ={(e) => setCategory(e.target.value)}>
                <option value="">selecione uma category</option>
                <option value="trabalho">trabalho</option>
                <option value="pessoal">pessoal</option>
                <option value="estudos">estudos</option>
            </select>
            <buttom type="submit">criar tarefa</buttom>
        </form>
    </div>
    )
};

export default todoform