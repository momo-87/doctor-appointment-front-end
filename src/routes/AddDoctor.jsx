import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [rate, setRate] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [image, setImage] = useState('');
  const [hospital, setHospital] = useState('');  
};

export default AddDoctor;
