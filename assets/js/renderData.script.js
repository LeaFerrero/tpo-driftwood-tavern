export function renderData (data)
{
    let items = null

    if(data && data.results && data.results.length > 0)
    {
        items = `
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Effect</td>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let item of data.results) 
        {
            const replaceCharacter = /[|_-]/g;
            item.desc = item.desc.replace(replaceCharacter, "");

            items += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.desc}</td>
                </tr>
            `;
        }

        items += `
                </tbody>
            </table>
        `;
    }
    else
    {
        console.log("no hay datos");
    }

    return items;
}