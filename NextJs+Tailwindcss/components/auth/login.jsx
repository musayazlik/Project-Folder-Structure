import React from 'react'

import Logo from '../../metamask-seeklogo.com.png'

function login() {

	return (
		<div className=' flex justify-center items-center h-screen'>
			<div class="bg-indigo-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex ">
				<div class="mb-4 px-20 pt-8">
					<label class="block text-grey-darker font-extrabold text-center text-3xl mb-11" for="username">
						Login
					</label>

					<button className='py-4 px-4 bg-zinc-900/40 flex gap-6 text-3xl font-bold items-center justify-center font-rubik'><img src={Logo.src} alt="" width={32} height={32} /> metamask</button>

				</div>
			</div>
		</div>
	)
}

export default login
