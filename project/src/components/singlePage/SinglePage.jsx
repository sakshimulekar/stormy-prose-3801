import React, { useEffect, useState } from 'react';
import { FormLabel,Text,Center, Input, Box, Button, Select,Image,Divider,FormControl,Breadcrumb,
BreadcrumbLink,BreadcrumbItem,List,ListIcon,ListItem} from "@chakra-ui/react";
import {CheckCircleIcon,} from "@chakra-ui/icons"
import { postPatient } from '../../redux/PatientReducer/action';
import { useToast } from '@chakra-ui/react'
import { useSelector,useDispatch } from 'react-redux';
const initial = {
  date: "",
  patient_name: "",
  Address: "",
  mobile: "",
  email: "",
  age: "",
  gender: "",
  description: "",
  time: ""
}

export const SinglePage = () => {
  
  const doctorsData= useSelector((store)=>{
    console.log(store.doctorGetReducer.doctorsData)
  return store.doctorGetReducer.doctorsData
  })

  console.log(doctorsData)

  const toast = useToast()
  const dispatch = useDispatch();
  const [input, setInput] = useState(initial)

  const handleInputChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...input,
      status: false,
      doctor: doctorsData.name,
      hospital: doctorsData.location,
      fees: doctorsData.fees,
      profile:doctorsData.profile
    }
    dispatch(postPatient(data))
    setInput(initial)
    doctorsData = []
    console.log(doctorsData)
  }

  return (
    <Box  blur='2px' >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/' color={"three"}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/bookingpage' color={"three"}>bookingpage</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/edit' color={"three"}>{doctorsData.name}</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>



      <Center>
        <Box boxSize={"50%"} boxShadow='2xl' p='6' rounded='md'>
        <Center>
          <Image src={doctorsData.image} alt='doctor image'borderRadius={"full"} w={"100px"} h={"100px"} />
        </Center>

        <Center>
          <Text as={"b"}>Request Appointment with</Text>
        </Center>

        <Center>
          <Text color={"two"} as={"b"} >{doctorsData.name}</Text>
        </Center>

        <Center>
          <Text color={"two"}  pb={"20px"}>{doctorsData.location}</Text>
        </Center>

        <Divider orientation='horizontal' mb={"20px"}/>

        <form  onSubmit={handleSubmit}  >
          <FormControl isRequired>
          <Box direction={'row'} display="flex" alignItems="center" gap={"30px"}>
          <Box>
            <FormLabel color={"two"}>Select Date</FormLabel>

            <Input variant='outline' 
            type='date' name='date' 
            value={input.date} color={"two"}
            onChange={handleInputChange}/>
          </Box>
          <Box>
            <FormLabel color={"two"}>Select time</FormLabel>
            <Select placeholder='Select time'
              name="time" value={input.time} color={"two"}
              onChange={handleInputChange}>
            <option value="9.00 AM">9.00 AM</option>
            <option value="9.30 AM">9.30 AM</option>
            <option value="10.00 AM">10.00 AM</option>
            <option value="10.30 AM">10.30 AM</option>
            <option value="11.00 AM">11.00 AM</option>
            <option value="11.30 AM">11.30 AM</option>
            <option value="12.00 PM">12.00 PM</option>
            <option value="1.30 PM">1.30 PM</option>
            <option value="1.00 PM">1.00 PM</option>
            <option value="1.30 PM">1.30 PM</option>
            <option value="2.00 PM">2.00 PM</option>
            <option value="2.30 PM">2.30 PM</option>
            <option value="3.00 PM">3.00 PM</option>
            <option value="3.30 PM">3.30 PM</option>
            <option value="4.00 PM">4.00 PM</option>
            <option value="4.30 PM">4.30 PM</option>
            <option value="5.00 PM">5.00 PM</option>
            <option value="5.00 PM">5.30 PM</option>
            <option value="6.00 PM">6.00 PM</option>
            <option value="6.30 PM">6.30 PM</option>
            <option value="7.00 PM">7.00 PM</option>
            <option value="7.30 PM">7.30 PM</option>
            <option value="8.00 PM">8.00 PM</option>
            <option value="8.30 PM">8.30 PM</option>
            </Select>
          </Box>
          </Box>

          <FormLabel color={"two"}>Patient Name</FormLabel>
            <Input color={"two"}
              type='text' name="patient_name"
              value={input.patient_name} placeholder='patient name'
              onChange={handleInputChange}
            />
            <FormLabel color={"two"}>Address</FormLabel>
            <Input color={"two"}
              type='text' name="Address"
              placeholder='Address'
              value={input.Address}
              onChange={handleInputChange}
            />
            <FormLabel color={"two"}>Mobile No.</FormLabel>
            <Input color={"two"}
              type='text'
              placeholder='Mobile No.'
              value={input.mobile} name='mobile'
              onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Email Id</FormLabel>
            <Input color={"two"}
              type='email' name="email"
              placeholder='Email Id'
              value={input.email} onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Age</FormLabel>
            <Input color={"two"}
              type='text'placeholder='Age' name="age"
              value={input.age} onChange={handleInputChange}
            />

            <FormLabel color={"two"}>Select Gender</FormLabel>
            <Select placeholder='Select Gender' color={"two"}
              name="gender" value={input.gender}
              onChange={handleInputChange}>
            <option value="male" color={"two"}>Male</option>
            <option value="female" color={"two"}>Female</option>
            </Select>
        
            <FormLabel color={"two"}>description</FormLabel>
            <Input
              type='text' color={"two"}
              placeholder='description' name="description"
              value={input.description}
              onChange={handleInputChange}
            />
            <Center>
            <Button m={"10px"} w={"350px"} bgColor="three" color="white" type='submit'
              onClick={() =>
                toast({
                title: 'Application submitted!',
                description: "Your application has been received. We will review your application and respond within the next 48 hours.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position:"top",
                })
              }
            >
              Submit
            </Button>
            </Center>
            </FormControl>
        </form>
        </Box>
      </Center>
      <List spacing={3} pt={"30px"}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
  
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
    </Box>
  )
}
