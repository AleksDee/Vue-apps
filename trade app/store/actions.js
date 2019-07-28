

export const increment = (context, payload) => {
    debugger;
    context.commit('incrementMutation', payload);
};

export const decrement = (context, payload) => {
    context.commit('decrementMutation', payload);
}
                
