export const fetchAPI = async (endPoint: string, options = {}) => {
<<<<<<< HEAD
    try {
        const response = await fetch(endPoint, options)

        if(response.status == 401){
            window.location.href = '/login'
            throw new Error('Sesión expirada. Inicia sesión nuevamente')
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => null)
            throw new Error(errorData?.message || 'Error desconocido')
        }

        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}
=======
  try {
    const response = await fetch(endPoint, options);

    if (response.status == 401) {
      window.location.href = "/login";
      throw new Error("Sesión expirada. Inicia sesión nuevamente");
    }

    /*  if (!response.ok) {
            const errorData = await response.json().catch(() => null)
            throw new Error(errorData?.message || 'Error desconocido')
        } */

    const jsonData = await response.json();
    if (!response.ok) {
      if (jsonData.error) {
        throw jsonData.error;
      } else if (jsonData.message) {
        throw jsonData.message;
      } else {
        throw { error: jsonData };
      }
    }

    return jsonData;
  } catch (error) {
    /* catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    } */
    console.error("error:", error);
    throw error;
  }
};
>>>>>>> main
