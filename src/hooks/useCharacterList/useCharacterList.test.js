import useCharacterList from ".";
import { act, render } from "@testing-library/react";

const fetchSuccessData = [{ test: 1 }, { test: 2 }];

beforeEach(() => {
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => Promise.resolve(fetchSuccessData),
            ok: true
        });
    });
});

afterEach(() => {
    global.fetch.mockRestore();
});

const Wrapper = ({ children, ...rest }) => children(useCharacterList(rest));

function setup(props) {
    const returnVal = {};
    render(
        <Wrapper {...props}>
            {(val) => {
                Object.assign(returnVal, val);
                return null;
            }}
        </Wrapper>
    );
    return returnVal;
}

it("returns data: null, isLoading: false and an error: Error when an error is encountered", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("rejected")));
    const promise = Promise.resolve();
    const hook = setup();
    await act(() => promise);
    expect(hook.data).toBeNull();
    expect(hook.isLoading).toBe(false);
    expect(hook.error).toBeInstanceOf(Error);
});

// todo
it.skip("returns data: null, isLoading: true and error: null while waiting for data", async () => {
    const promise = Promise.resolve();
    const hook = setup();
    await act(() => promise);
});

it("returns data: fetchSuccessData, isLoading: false and error: null on successful fetch", async () => {
    const promise = Promise.resolve();
    const hook = setup();
    await act(() => promise);
    expect(hook.data).toEqual(expect.arrayContaining(fetchSuccessData));
    expect(hook.isLoading).toBe(false);
    expect(hook.error).toBeNull();
});
