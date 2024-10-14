
export function SampleComponent({setValue}) {

    const handleChange = (str)=>{
        if(str==='en'){
            setValue('Website')
        }else{
            setValue('site web')
        }
    }
    return (
        <div>
            <select name='language' id='lan' onChange={(e)=>handleChange(e.target.value)}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </div>
    );
}