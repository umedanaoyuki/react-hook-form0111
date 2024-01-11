import './App.css';
import {useForm} from "react-hook-form";

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

return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
        <div>
            <label htmlFor="name">名前:</label><br/>
            <input id="name" type="text" {...register('name', {
                required: '名前は必須です。',
                maxLength: {
                    value: 20,
                    message: '名前は20文字以内にしてください。'
                }
            })}　/>
            <div>{errors.name?.message}</div>
        </div>

        <div>
            <label htmlFor='gender'>性別：</label><br/>
            <label>
                <input type="radio" value="male"
                    {...register('gender', {
                        required: '性別は必須です。',
                    })} />男性
            </label>
            <label>
                <input type="radio" value="female"
                       {...register('gender', {
                           required: '性別は必須です。',
                       })} />女性
            </label>
            <div>{errors.gender?.message}</div>
        </div>

        





    </form>
)


}