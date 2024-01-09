import axios from "axios";

const fetchData = async () => {
    try {
        setLoading(true);

        const options = {
            method: 'GET',
            url: 'https://instagram301.p.rapidapi.com/postinfo.php',
            params: {
                url: urlInput,
            },
            headers: {
                'X-RapidAPI-Key': '300c560a3cmsh60f877446a32c8dp16727ajsn6e88d8d65a6c',
                'X-RapidAPI-Host': 'instagram301.p.rapidapi.com',
            },
        };

        const response = await axios.request(options);

        const instagramData = response.data;
        setData(instagramData);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};