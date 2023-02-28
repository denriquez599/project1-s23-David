const nameRef = useRef(null)
    const levelRef = useRef(null)
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    function setUrl(){
        let url = `/api/experience/${name}?name=${name}&level=${level}`;
        console.log(url)
        return url;
    }
    const handleChange = () => {
        setName(nameRef.current.value);
        setLevel(levelRef.current.value)
      };