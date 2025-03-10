export const blogData = [
    {
        id: 1,
        title: 'HOW BLOCKCHAIN CAN TRANSFORM A COUNTRY LIKE INDIA?',
        description: 'Let\'s start with Agriculture. Agriculture for us, to do anything in transforming India; we first have to look...',
        date: 'Apr 8, 2020',
        image: 'https://www.wallpaperkiss.com/wimg/b/237-2377265_big.jpg',
        url: 'https://medium.com/inovus-labs-iedc/how-blockchain-can-transform-a-country-like-india-2f3d62a0fc3a'
    },
    {
        id: 2,
        title: 'TENSOR PROCESSING UNITS: BOTH HISTORY AND APPLICATIONS',
        description: 'Google announced its Tensor Processing Units (TPU for short), in May 2016 as a Custom made Application Specific...',
        date: 'Apr 21, 2019',
        image: 'https://storage.googleapis.com/kaggle-media/tpu/tpuv3angle.jpg',
        url: 'https://medium.com/@decoded_cipher/tensor-processing-units-both-history-and-applications-b3479d92a61d'
    },
    {
        id: 3,
        title: 'HOW & WHAT I CAME TO KNOW ABOUT BLOCKCHAIN?',
        description: 'It would have probably been another boring rainy college day unless I managed to bunk my daily class schedule. To my fate, I was caught...',
        date: 'Apr 16, 2020',
        image: 'https://wallpaperaccess.com/full/3648367.jpg',
        url: 'https://medium.com/inovus-labs-iedc/how-and-what-i-came-to-know-of-blockchain-e014448dda69'
    },
    {
        id: 4,
        title: 'KARATE: THE MOST AWAITED GUEST TO THE OLYMPIC FAMILY',
        description: 'I started practicing karate at the age of 7 and now 12 years later, I not only follow the core principles of martial arts...',
        date: 'Sep 17, 2020',
        image: 'https://cdn.wallpapersafari.com/18/5/oQgNVd.jpg',
        url: 'https://medium.com/@decoded_cipher/karate-the-most-awaited-guest-to-the-olympic-family-d6b6b0449eab'
    },
    {
        id: 5,
        title: 'INTRODUCTION TO QUANTUM COMPUTING',
        description: 'I am actually a beginner myself. I just started learn about it 6 months ago. So I am here to tell you that anyone can start learning quantum computing...',
        date: 'May 10, 2019',
        image: 'https://c0.wallpaperflare.com/preview/355/109/197/quantum-computer-processor-computer-technology.jpg',
        url: 'https://medium.com/@decoded_cipher/introduction-to-quantum-computing-1f49d0c9732a'
    }
];

const INOVUS_BLOG_URL = 'https://blog.inovuslabs.org/ghost/api/content/posts/?key=de858d77141cc957615e54f70b&filter=authors:arjun&fields=title,custom_excerpt,excerpt,published_at,url,feature_image';

export const fetchCombinedBlogData = async () => {
    try {
        const response = await fetch(INOVUS_BLOG_URL);
        const data = await response.json();
        const externalBlogs = data.posts.map(post => ({
            id: post.id,
            title: post.title,
            description: post.custom_excerpt || post.excerpt,
            date: formattedDate(post.published_at),
            image: post.feature_image,
            url: post.url
        }));
        
        const combinedBlogs = [...blogData, ...externalBlogs];
        combinedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        return combinedBlogs;
    } catch (error) {
        console.error('Error fetching external blogs:', error);
        return blogData;
    }
};

const formattedDate = (date) => {
    const d = new Date(date);
    return d.toDateString().slice(4);
};