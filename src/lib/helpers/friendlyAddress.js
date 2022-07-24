export const friendlyAddress = (address) => {
	return address.substr(0, 4) + '...' + address.substr(address.length - 4);
};
