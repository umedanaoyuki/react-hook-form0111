import './App.css';
import { useForm } from 'react-hooks-form';

export default function FormBasic() {

    const defaultValue = {
        name: '山田太郎',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    const { register, handleSubmit, formState: { errors }}  = useForm({
        defaultValue
    });

    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);


}