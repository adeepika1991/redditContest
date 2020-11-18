export const fetchData = async () => {
    const result = await fetch('http://www.reddit.com/r/pics/.json?jsonp=');
    const image = await result.json();
    return image.data.children.splice(1).map((item) => item.data);
}

export const convertDate = (date) => {
    return new Date(date * 1000).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}