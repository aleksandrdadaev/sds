import axios from 'axios'

import { apiUrl } from '../config/api.config'

export const $api = axios.create({
	baseURL: apiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
})
