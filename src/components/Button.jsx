import btnBg from '../assets/images/btg-bg.svg';
import btnBg2 from '../assets/images/btg-bg-2.svg';
import FontAwesome from './FontAwesome';

const Button = (props) =>{
    return(
        <a 
        href={props.href}
        className='group border border-[#ffffff80] inline-block px-8 py-3 rounded-4xl text-white cursor-pointer relative overflow-hidden hover:border-[#139bfd] transition duration-300'>
            <span className={`btn-hack animate-hack flex items-center justify-center absolute z-[1] inset-0 p-[2px] rounded-full [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)_padding-box] after:content-[''] after:absolute after:w-[500%] after:h-[500%] after:bg-[conic-gradient(from_148deg,_transparent_46%,_#ffffff_50%,_transparent_54%)] after:z-[1] group-hover:after:bg-[conic-gradient(from_148deg,_transparent_46%,_#139bfd_50%,_transparent_54%)] transition duration-300`}></span>
            <img src={btnBg} className='absolute top-0 left-0 w-100 transition duration-300'/>
            <img src={btnBg2} className='absolute top-0 left-0 w-100 opacity-0 group-hover:opacity-100 transition duration-300'/>
            <span className='relative z-10'>{props.value}</span>
            <spna className="ms-2 relative transition duration-300">
                <FontAwesome style="solid" name="arrow-right" className="relative"/>
            </spna>
        </a>
    )
}

export default Button;