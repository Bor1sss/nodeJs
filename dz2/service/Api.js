import axios from 'axios';

export class Api {
    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    async get(endpoint) {
        try {
            const response = await this.axiosInstance.get(endpoint);
            this.logToBuffer(response.data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(endpoint, body) {
        try {
            const response = await this.axiosInstance.post(endpoint, body);
            this.logToBuffer(response.data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(endpoint, body) {
        try {
            await this.axiosInstance.put(endpoint, body);
            this.logToBuffer("200 OK");
            return "200 OK";
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(endpoint) {
        try {
            const response = await this.axiosInstance.delete(endpoint);
            this.logToBuffer(response.data);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    logToBuffer(data) {
        const buffer = Buffer.from(JSON.stringify(data, null, 2));
        console.log(buffer.toString());
    }

    handleError(error) {
        console.error('API error:', error.response ? error.response.data : error.message);
    }
}
