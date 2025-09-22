export const blogData = [
    {
        id: 1,
        title: 'How Blockchain Can Transform a Country Like India?',
        description: 'Let\'s start with Agriculture. Agriculture for us, to do anything in transforming India; we first have to look...',
        date: 'Apr 8, 2020',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4EljFtaVjjlhI4x7-UEGiQ.png',
        url: 'https://medium.com/inovus-labs-iedc/how-blockchain-can-transform-a-country-like-india-2f3d62a0fc3a'
    },
    {
        id: 2,
        title: 'Tensor Processing Units: Both History and Applications',
        description: 'Google announced its Tensor Processing Units (TPU for short), in May 2016 as a Custom made Application Specific...',
        date: 'Apr 21, 2019',
        image: 'https://storage.googleapis.com/kaggle-media/tpu/tpuv3angle.jpg',
        url: 'https://medium.com/@decoded_cipher/tensor-processing-units-both-history-and-applications-b3479d92a61d'
    },
    {
        id: 3,
        title: 'How & What I Came to Know of Blockchain?',
        description: 'It would have probably been another boring rainy college day unless I managed to bunk my daily class schedule. To my fate, I was caught...',
        date: 'Apr 16, 2020',
        image: 'https://wallpaperaccess.com/full/3648367.jpg',
        url: 'https://medium.com/inovus-labs-iedc/how-and-what-i-came-to-know-of-blockchain-e014448dda69'
    },
    {
        id: 4,
        title: 'Karate: The Most Awaited Guest to the Olympic Family',
        description: 'I started practicing karate at the age of 7 and now 12 years later, I not only follow the core principles of martial arts...',
        date: 'Sep 17, 2020',
        image: 'https://cdn.wallpapersafari.com/18/5/oQgNVd.jpg',
        url: 'https://medium.com/@decoded_cipher/karate-the-most-awaited-guest-to-the-olympic-family-d6b6b0449eab'
    },
    {
        id: 5,
        title: 'Introduction to Quantum Computing',
        description: 'I am actually a beginner myself. I just started learn about it 6 months ago. So I am here to tell you that anyone can start learning quantum computing...',
        date: 'May 10, 2019',
        image: 'https://c0.wallpaperflare.com/preview/355/109/197/quantum-computer-processor-computer-technology.jpg',
        url: 'https://medium.com/@decoded_cipher/introduction-to-quantum-computing-1f49d0c9732a'
    },
    {
        id: 6,
        title: 'The Hidden Life of an Email: Alice Writes, Bob Reads',
        description: 'Ever wondered what happens when you hit the send button on your email? Here\'s a simplified breakdown of the journey your email takes from your outbox to the recipient\'s inbox...',
        date: 'Sep 22, 2025',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CDhy_Bojy3BSvlAERSQIsQ.jpeg',
        url: 'https://medium.com/@decoded_cipher/the-hidden-life-of-an-email-dacfc73d4262'
    }
];

const INOVUS_BLOG_URL = 'https://blog.inovuslabs.org/ghost/api/content/posts/?key=de858d77141cc957615e54f70b&filter=authors:arjun&fields=title,custom_excerpt,excerpt,published_at,url,feature_image&limit=all';

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