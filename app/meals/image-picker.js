
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import style from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const pickerInput = useRef();
    const [pickedImage, setPickedImage] = useState();

    const handlePickerClick = () => {
        pickerInput.current.click();
    };

    const handleImagePick = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        };

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    };

    return <div className={style.picker}>
        <div className={style.controls}>
            <label
                htmlFor={name}>
                {label}
            </label>
            <div className={style.preview}>
                {!pickedImage && <p>No image selected yet</p>}
                {pickedImage && <Image
                    src={pickedImage}
                    alt="The image selected by the user"
                    fill />}
            </div>
            <input
                className={style.input}
                type="file"
                name={name}
                id={name}
                accept="image/png, image/jpeg"
                ref={pickerInput}
                onChange={(e) => handleImagePick(e)}
                required
            />
            <button className={style.button}
                type="button"
                onClick={handlePickerClick}>
                Pick an Image
            </button>
        </div>
    </div>
}