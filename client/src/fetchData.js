const fetchData = async (data, endPoint) => {

    const response = await fetch(`/${endPoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return await response.json()
    } else {
        throw new Error(`Conversion request failed: ${response.statusText}`)
    }
}

export default fetchData