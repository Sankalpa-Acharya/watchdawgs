import { redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function useToken() {

    return redirect(`room?id=${uuidv4()}`)
}
