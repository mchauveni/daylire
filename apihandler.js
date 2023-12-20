class ApiHandler {
    static async fetchAllLoufokeries() {
        return await ApiHandler.get("https://mchauveni.alwaysdata.net/loufok_app/api/loufokeries");
    }

    static async fetchLoufokerie(id) {
        return await ApiHandler.get(`https://mchauveni.alwaysdata.net/loufok_app/api/loufokerie/${id}`);
    }

    static async postLike(body) {
        return await ApiHandler.post("https://mchauveni.alwaysdata.net/loufok_app/api/like", body);
    }

    static async get(url) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async post(url, body) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: body
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default ApiHandler;