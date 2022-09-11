import { supabase } from "../../services/supabaseClient";

export default async (req, res) => {
    const { data } = await supabase
        .from('feed') // table created in supabase
        .select('*') // grabs all posts
        .order('id', { ascending:false }) // shows recent post first

        res.status(200).json({data: data})
}