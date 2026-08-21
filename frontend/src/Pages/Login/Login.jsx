import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../assets/Logo.png';
function Login() {
  return (
    <>
      <div className="">
        <div>
          <div className='flex justify-between align-center py-4 px-20'>
            <div className='flex justify-start align-center gap-2'>
              <img src={logo} alt="" className='w-10 rounded-full'/>
              <h1 className='text-4xl font-bold text-black'>Ethio<span className='text-[#fab612]'>Movie</span></h1>
            </div>
            <div className='flex justify-center align-center gap-2 border border-[#fab612] rounded-lg px-4 py-2'>
              <LanguageIcon/>
              <select name="" id="" className='outline-none'>
                <option value="Eng" className='outline-none'>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
