import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imageProgress, setimageProgress] = useState(0);
  const [ImageError, setImageError] = useState(false);
  const [FormData, setFormData] = useState({});



  console.log(FormData);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setimageProgress(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => setFormData({ ...FormData, profilePicture: downloadURL })
          )
      });
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4' >
        <input type="file" ref={fileRef} hidden accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={FormData.profilePicture || currentUser.profilePicture}
          alt=""
          className='h-24 w-24 mt-2 self-center bg-slate-200 rounded-full cursor-pointer object-cover'
          onClick={() => fileRef.current.click()}
        />

        <p className='self-center text-sm'>
          {ImageError ? (
            <span className='text-red-600'>
              Error uploading image (file size must be less than 2 mb)
            </span>
          ) : imageProgress > 0 && imageProgress < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imageProgress} %`}</span>
          ) : imageProgress === 100 ? (
            <span className='text-green-600'>Image uploaded succesfully</span>
          ) : (
            ''
          )
          }
        </p>

        <input type="text" id='username' placeholder='Username' defaultValue={currentUser.username} className='bg-slate-100 rounded-lg p-3' />
        <input type="email" id='email' placeholder='Email' defaultValue={currentUser.email} className='bg-slate-100 rounded-lg p-3' />
        <input type="password" id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile