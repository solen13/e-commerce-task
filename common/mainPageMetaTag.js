const mainPageMetaTag = () => {

    const title = 'Alışveriş sitesi';
    const description = 'Binlerce ürünün bulunduğu alışveriş sitesi';
    const keywords = 'alışveriş, hediyelik, giyim, kozmetik';
    const ogImageURL = 'https://example.com/og-image.jpg';

    return {
        title,
        description,
        keywords,
        meta: [
            { hid: 'description', name: 'description', content: description },
            { hid: 'keywords', name: 'keywords', content: keywords },

            { hid: 'og:title', property: 'og:title', content: title },
            { hid: 'og:description', property: 'og:description', content: description },
            { hid: 'keywords', name: 'keywords', content: keywords },
            { hid: 'og:image', property: 'og:image', content: ogImageURL },

            { hid: 'twitter:title', name: 'twitter:title', content: title },
            { hid: 'twitter:description', name: 'twitter:description', content: description },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'author', name: 'author', content: 'Uğur Şölen' },
            { hid: 'language', name: 'language', content: 'Turkish' },

        ],
        link: [
            { rel: 'canonical', href: 'https://example.com/canonical-url' },
        ],
    };


}

export default mainPageMetaTag;
