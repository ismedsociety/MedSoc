import { ref, onValue, update, increment } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js';

export function setupData(id) {
    const likesRef = ref(database, `/${id}/likes`);

    onValue(likesRef, (snapshot) => {
        if (snapshot.exists()) {
            document.getElementById(`${id}likes`).innerHTML = snapshot.val();
            document.getElementById(`${id}svg`).setAttribute("data-liked", localStorage.getItem(`${id}liked`));
        } else {
            document.getElementById(`${id}likes`).innerHTML = "0";
        }
    }, {
        // runs once, not used
    });
}

window.likePost = function (id) {
    const alreadyLiked = localStorage.getItem(`${id}liked`);

    if (!alreadyLiked || alreadyLiked == "false") {
        const updates = {};
        updates[`/${id}/likes`] = increment(1);

        update(ref(database), updates)
            .then(() => {
                localStorage.setItem(`${id}liked`, "true");
                document.getElementById(`${id}svg`).setAttribute("data-liked", "true");
            })
            .catch((error) => {
                console.error("Error liking: ", error);
            });
    } else {
        const updates = {};
        updates[`/${id}/likes`] = increment(-1);

        update(ref(database), updates)
            .then(() => {
                localStorage.setItem(`${id}liked`, "false");
                document.getElementById(`${id}svg`).setAttribute("data-liked", "false");
            })
            .catch((error) => {
                console.error("Error unliking: ", error);
            });
    }
};
