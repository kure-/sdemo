import 'es6-promise/dist/es6-promise.auto';
import 'handlebars/dist/handlebars';

const breakpoints = {
	small: 320,
	medium: 600,
	large: 940
};

const photos = [
	{
		title: 'much title, such wow!',
		image: {
			small: {
				size: 320,
				src: '/images/4_320.JPG'
			},
			medium: {
				size: 600,
				src: '/images/4_600.JPG'
			},
			large: {
				size: 940,
				src: '/images/4_940.JPG'
			}
		},
		shouldHaveLoadMore: false
	},
	{
		title: 'very much title',
		image: {
			small: {
				size: 320,
				src: '/images/1_320.JPG'
			},
			medium: {
				size: 600,
				src: '/images/1_600.JPG'
			},
			large: {
				size: 940,
				src: '/images/1_940.JPG'
			}
		},
		shouldHaveLoadMore: false
	},
	{
		title: 'very title, very wow!',
		image: {
			small: {
				size: 320,
				src: '/images/2_320.JPG'
			},
			medium: {
				size: 600,
				src: '/images/2_600.JPG'
			},
			large: {
				size: 940,
				src: '/images/2_940.JPG'
			}
		},
		shouldHaveLoadMore: false
	},
	{
		title: 'such title, very wow!',
		image: {
			small: {
				size: 320,
				src: '/images/3_320.JPG'
			},
			medium: {
				size: 600,
				src: '/images/3_600.JPG'
			},
			large: {
				size: 940,
				src: '/images/3_940.JPG'
			}
		},
		shouldHaveLoadMore: true
	}
];

const galleryPaging = window.innerWidth < breakpoints.medium ? 3 : 4;
const galleryTemplate = Handlebars.compile(document.getElementById('gallery-template').innerHTML);
const galleryElement = document.getElementById('gallery');


function loadPhotos() {
	let galleryGroup = document.createElement('div');
	galleryGroup.className = 'Gallery-group';

	photos.forEach((photo, index) => {
		let galleryItem = document.createElement('div');
		let className = 'Gallery-item';
		let srcSet = '(max-width: 599px) 100vw, (max-width: 939px) calc((100vw /3) * 2), calc(100vw * 0.6)';
		switch(index) {
			case 0:
				className += ' Gallery-item--large';
				break;
			case 1:
				className += ' Gallery-item--medium';
				srcSet = '(max-width: 599px) 50vw, (max-width: 939px) calc(100% / 3), calc(100% * 0.4)';
				break;
			case 2:
				className += ' Gallery-item--medium Gallery-item--small Gallery-item--hiddenMediumDown';
				srcSet = '(max-width: 599px) 50vw, (max-width: 939px) calc(100% / 3), calc(100% * 0.2)';
				break;
			case 3:
				className += ' Gallery-item--medium Gallery-item--small Gallery-item--hasLoadMore';
				srcSet = '(max-width: 599px) 50vw, (max-width: 939px) calc(100% / 3), calc(100% * 0.2)';
				break;
		}
		photo.srcSet = srcSet;
		galleryItem.className = className;
		galleryItem.innerHTML = galleryTemplate({data: photo});
		galleryGroup.appendChild(galleryItem);
	});
	galleryElement.appendChild(galleryGroup);
};