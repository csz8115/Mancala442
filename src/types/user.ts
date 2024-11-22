export interface User {
    id: number; 
    username: string;
    password: string;
    permissions: string[];
    //optional params
    gamesPlayed?: number;
    gamesWon?: number;
    gamesLost?: number;
}
// 

