import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, boxes}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'/>
				{boxes.map(box=> {
					return <div 
						key={`box${box.topRow}${box.rightCol}`} 
						className='bounding_box' 
						style={{top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}}>	
					</div>
				})
				}
			</div>
		</div>
	)
}


export default FaceRecognition;