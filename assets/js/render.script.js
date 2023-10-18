export class Render{

    constructor(containerID)
    {
        this.container = document.getElementById(containerID);
    }

    fetchData(url, callback, options = {})
    {
        if(!callback)
        {
            console.log(data);
        }
        else
        {
            fetch(url, options)
            .then(response => response.json())
            .then(
                data =>
                {
                    let items = callback(data);
                    this.#renderInContainer(items);
                }
            );
        }
    }

    #renderInContainer(items)
    {
        this.container.innerHTML = items;
    }
}

