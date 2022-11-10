import { Button, Input, Textarea } from '@material-tailwind/react';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const AddService = () => {
    
    useTitle("ADD SERVICES")

    const ItemID = Math.floor(1000 + Math.random() * 9000);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const cardImgURL = form.cardImgURL.value;
        const thumbURL = form.thumbURL.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const info = form.info.value;
        console.log(serviceName, cardImgURL, thumbURL, rating, price, info);
        const service = {
            ItemID,
            serviceName,
            picture: cardImgURL,
            thumbnail_img: thumbURL,
            rating,
            Price: price,
            info
        }
        fetch(`https://service-review-server-11.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
        console.log(service);
    }

    return (
        <form onSubmit={handleFormSubmit} className='sm:container mx-auto mt-10 min-h-[70.5vh] w-4/5'>

            <p className='text-center text-2xl md:text-4xl font-semibold'>Add your own service over here!</p>
            <div className='mt-10 grid md:grid-cols-3 gap-2'>
                <div className='md:col-span-1'><Input type='number' name='itemId' className='' color="green" label="ItemID" defaultValue={ItemID} readOnly /></div>
                <div className='md:col-span-2'><Input type='name' name='serviceName' className='' color="green" label="Service Name" required /></div>
            </div>
            <div className='mt-2 grid grid-cols-1'>
                <div className='md:col-span-2'><Input type='url' name='cardImgURL' className='' color="green" label="Card Image URL" required /></div>
            </div>
            <div className='mt-2'>
                <div className='md:col-span-2'><Input type='url' name='thumbURL' className='' color="green" label="Thumbnail URL" required /></div>
            </div>
            <div className='mt-2 grid md:grid-cols-2 gap-2'>
                <div className=''><Input type='text' name='rating' className='' color="green" label="Rating" required /></div>
                <div className=''><Input type='number' name='price' className='' color="green" label="Price" required /></div>
            </div>
            <div className='mt-2'>
                <Textarea color='green' typeof='text' name='info' label="Info" required />
            </div>
            <Button color='green' variant='gradient' type='submit'>Submit</Button>
        </form>
    );
};

export default AddService;