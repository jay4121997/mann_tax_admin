import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../../components/UI/Input/Input'
import "./updateContact.css"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactUpdate } from '../../store/action';





let baseURL = process.env.REACT_APP_MY_URL
baseURL += '/contact.json'


const ADDRESS = "address"
const EMAIL = 'email'
const PHONE = 'phone'
const GMAPS = 'GMAPS'
const ADATE = 'ADD-DATE'
const AMON = 'AMON'
const ATUE = 'ATUE'
const AWED = 'AWED'
const ATHU = 'ATHU'
const AFRI = 'AFRI'
const ASAT = 'ASAT'
const ASUN = 'ASUN'
const RWEEKDAY = 'RWEEKDAY'
const RWEEKEND = 'RWEEKEND'

const UpdateContact = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [address,setAddress]=useState('360 Pitfield Road, Scaborough, ON M1S 3E6')
    const [number,setnumber]=useState('+1(647)-774-2131')
    const [email,setEmail]=useState('dinakesaria@gmail.com')
    const [mapUrl,setMapUrl]=useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.308621601586!2d-79.26054638462888!3d43.78720867911686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d10fae38eb8b%3A0x2d6d204e1437c3d1!2s360%20Pitfield%20Rd%2C%20Scarborough%2C%20ON!5e0!3m2!1sen!2sca!4v1612931197404!5m2!1sen!2sca')
    const [additionalDate,setAdditionalDate]=useState('February 01 to May 15')
    const [regHours1,setregHours1]=useState('10am to 9pm')
    const [regHours2,setregHours2]=useState('11am to 6pm')
    const [additionalHour, setAdditionalHour] = useState({
        "monday":"8am - 10pm",
        "tuesday":"8am - 10pm",
        "wednesday":"8am - 10pm",
        "thursday":"8am - 10pm",
        "friday":"8am - 10pm",
        "saturday":"8am - 10pm",
        "sunday":"9am - 9pm",
    })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MY_URL}/test1.json`)
            .then(res => {
                const data = res.data
                
        })
    })
    
    useEffect(() => {
        try {
            axios.get(baseURL)
                .then((res) => {
                    const {monday,tuesday,wednesday,thursday,friday,saturday,sunday} = res.data.additionalHour
                setAddress(res.data.address)
                setnumber(res.data.number)
                setEmail(res.data.email)
                setMapUrl(res.data.mapurl)
                setAdditionalDate(res.data.additionalDate)
                setregHours1(res.data.regHours1)
                setregHours2(res.data.regHours2)
                    setAdditionalHour(p => ({
                        ...p,
                        monday,
                        tuesday,
                        wednesday,
                        thursday,
                        friday,
                        saturday,
                        sunday
                }))
            })
            .catch((e) => console.log(e))
        }
        catch {
            alert('Unable to load existing data')
            history.push('/view-all')

        }
    },[])



    const onChangeHandler = (e, val) => {
        switch (val) {
            case ADDRESS: {
                setAddress(e.target.value)
                break;
            }
            case PHONE: {
                setnumber(e.target.value)
                break;
            }
            case EMAIL: {
                setEmail(e.target.value)
                break;
            }
            case GMAPS: {
                setMapUrl(e.target.value)
                break;
            }
            case ADATE: {
                setAdditionalDate(e.target.value)
                break;
            }
            case AMON: {
                setAdditionalHour(prev => ({
                    ...prev,
                    monday:e.target.value
                }))
                
                break;
            }
            case ATUE: {
                setAdditionalHour(prev => ({
                    ...prev,
                    tuesday:e.target.value
                }))
                break;
            }
            case AWED: {
                setAdditionalHour(prev => ({
                    ...prev,
                    wednesday:e.target.value
                }))
                break;
            }
            case ATHU: {
                setAdditionalHour(prev => ({
                    ...prev,
                    thursday:e.target.value
                }))
                break;
            }
            case AFRI: {
                setAdditionalHour(prev => ({
                    ...prev,
                    friday:e.target.value
                }))
                break;
            }
            case ASAT: {
                setAdditionalHour(prev => ({
                    ...prev,
                    saturday:e.target.value
                }))
                break;
            }
            case ASUN: {
                setAdditionalHour(prev => ({
                    ...prev,
                    sunday:e.target.value
                }))
                break;
            }
            case RWEEKDAY: {
                setregHours1(e.target.value)
                break;
            }
            case RWEEKEND: {
                setregHours2(e.target.value)
                break;
            }
            default:
                return

        }
    }
    let formData = [
        {
            label: "Address",
            type: "text",
            value: address,
            name: ADDRESS,
            note: "Add Address",
        },
        {
            label: 'Phone Number',
            type: 'text',
            value: number,
            name: PHONE,
            note: "add contect number with + and ()"
        },
        {
            label: 'Email',
            type: 'email',
            value: email,
            name: EMAIL,
            note: "enter a valid email",
        },
        {
            label: 'Google Maps URL',
            type: 'text',
            value:mapUrl,
            name: GMAPS,
            note: "Get the embade link from google maps"
        },
        {
            label: 'Date Range for additional Hours',
            type: 'text',
            value:additionalDate,
            name: ADATE,
            note: "Give date range"
        },
        {
            label: 'Monday - Additional Hours',
            type: 'text',
            value:additionalHour.monday,
            name: AMON,
            note: "Hours for monday"
        },
        {
            label: 'Tuesday - Additional Hours',
            type: 'text',
            value:additionalHour.tuesday,
            name: ATUE,
            note: "Hours for tuesday"
        },
        {
            label: 'Wednesday - Additional Hours',
            type: 'text',
            value:additionalHour.wednesday,
            name: AWED,
            note: "Hours for wednesday"
        },
        {
            label: 'Thursday - Additional Hours',
            type: 'text',
            value:additionalHour.thursday,
            name: ATHU,
            note: "Hours for thursday"
        },
        {
            label: 'Friday - Additional Hours',
            type: 'text',
            value:additionalHour.friday,
            name: AFRI,
            note: "Hours for friday"
        },
        {
            label: 'Saturday - Additional Hours',
            type: 'text',
            value:additionalHour.saturday,
            name: ASAT,
            note: "Hours for saturday"
        },
        {
            label: 'Sunday - Additional Hours',
            type: 'text',
            value:additionalHour.sunday,
            name: ASUN,
            note: "Hours for sunday"
        },
        {
            label: 'Regular hours MON - FRI',
            type: 'text',
            value:regHours1,
            name: RWEEKDAY,
            note: "Hours for weekdays"
        },
        {
            label: 'Regular hours Weekend',
            type: 'text',
            value:regHours2,
            name: RWEEKEND,
            note: "Hours for weekends"
        }
    ]

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const contactData = {
            additionalDate,
            additionalHour,
            address,
            email,
            mapurl: mapUrl,
            number,
            regHours1,
            regHours2
        }
        dispatch(contactUpdate(contactData))
        history.push('/view-all')
    }
    return (
        <div>
            <form onSubmit={(e)=>formSubmitHandler(e)}>
                <div className='fields'>
                {formData.map((item) => 
                    <Input
                    key={item.label}
                    label={item.label}
                    type={item.type}
                    value={item.value}
                    name={item.name}
                    note={item.note}
                    onChangeHandler={onChangeHandler}
                    />
                )
                }
                </div>
                <button type='submit' style={{ padding: '20px 50px',border:'none',margin:"0 auto",width:'100%',fontSize:'35px',cursor:"pointer",backgroundColor:"teal",color:'white' }}> Submit Updates</button>
            </form>
        </div>
    )
}

export default UpdateContact
