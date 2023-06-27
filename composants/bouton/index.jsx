import style from './index.module.css'
import { A } from '@solidjs/router'

export default function Button({children, url = '/'}){
    return(
        <A href={url}>
            <button>
                {children}
            </button>
        </A>
    )
}