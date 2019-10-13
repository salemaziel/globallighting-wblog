import React from 'react'
import '../css/box.css'
import '../css/HomePageCss/synergy.css'
import Hydroveggie from '../images/stock-hydroveggie.jpg'
import Nightlight from '../images/stock-nightlight.jpg'
import UVsterilize from '../images/stock-uvsterilize.jpg'


const Box = () => (

        <div id="main">
			<div class="inner">

				<div class="thumbnails">

					<div class="box">
							<img src={Nightlight} alt="" class="image fit"/>
								<div class="inner">
									<h3>Nascetur nunc varius commodo</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
					</div>

					<div class="box">
							<img src={Hydroveggie} alt="" class="image fit"/>
								<div class="inner">
									<h3>Nascetur nunc varius commodo</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
					</div>

					<div class="box">
							<img src={UVsterilize} alt="" class="image fit"/>
								<div class="inner">
									<h3>Nascetur nunc varius commodo</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
					</div>
				</div>

			</div>
		</div>
)

export default Box