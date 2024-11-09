export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      ingredient: {
        Row: {
          category: string | null
          created_at: string
          id: number
          ingredient_name: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          ingredient_name?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          ingredient_name?: string | null
        }
        Relationships: []
      }
      meal_plan: {
        Row: {
          breakfast_id: number | null
          created_at: string
          date: string | null
          dinner_id: number | null
          id: number
          lunch_id: number | null
          user_id: number | null
        }
        Insert: {
          breakfast_id?: number | null
          created_at?: string
          date?: string | null
          dinner_id?: number | null
          id?: number
          lunch_id?: number | null
          user_id?: number | null
        }
        Update: {
          breakfast_id?: number | null
          created_at?: string
          date?: string | null
          dinner_id?: number | null
          id?: number
          lunch_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "meal_plan_breakfast_id_fkey"
            columns: ["breakfast_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_dinner_id_fkey"
            columns: ["dinner_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_lunch_id_fkey"
            columns: ["lunch_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe: {
        Row: {
          copied_recipe_id: number | null
          created_at: string
          created_user_id: number | null
          duration: number | null
          external_link: string | null
          id: number
          img_link: string | null
          is_favourite: boolean | null
          is_private: boolean | null
          note: string | null
          recipe_name: string | null
        }
        Insert: {
          copied_recipe_id?: number | null
          created_at?: string
          created_user_id?: number | null
          duration?: number | null
          external_link?: string | null
          id?: number
          img_link?: string | null
          is_favourite?: boolean | null
          is_private?: boolean | null
          note?: string | null
          recipe_name?: string | null
        }
        Update: {
          copied_recipe_id?: number | null
          created_at?: string
          created_user_id?: number | null
          duration?: number | null
          external_link?: string | null
          id?: number
          img_link?: string | null
          is_favourite?: boolean | null
          is_private?: boolean | null
          note?: string | null
          recipe_name?: string | null
        }
        Relationships: []
      }
      recipe_ingredient: {
        Row: {
          created_at: string
          id: number
          ingredient_id: number | null
          is_main: boolean | null
          is_optional: boolean | null
          is_sauce: boolean | null
          quantity: string | null
          recipe_id: number | null
          unit: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          ingredient_id?: number | null
          is_main?: boolean | null
          is_optional?: boolean | null
          is_sauce?: boolean | null
          quantity?: string | null
          recipe_id?: number | null
          unit?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          ingredient_id?: number | null
          is_main?: boolean | null
          is_optional?: boolean | null
          is_sauce?: boolean | null
          quantity?: string | null
          recipe_id?: number | null
          unit?: string | null
        }
        Relationships: []
      }
      recipe_tag: {
        Row: {
          created_at: string
          id: number
          recipe_id: number | null
          tag_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          recipe_id?: number | null
          tag_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          recipe_id?: number | null
          tag_id?: number | null
        }
        Relationships: []
      }
      tag: {
        Row: {
          created_at: string
          id: number
          tag_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          tag_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          tag_name?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          created_at: string
          email: string | null
          id: number
          password: string | null
          recipe_book_name: string | null
          user_name: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          password?: string | null
          recipe_book_name?: string | null
          user_name?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          password?: string | null
          recipe_book_name?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      user_recipe_collection: {
        Row: {
          created_at: string
          id: number
          recipe_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          recipe_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          recipe_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      user_tag_collection: {
        Row: {
          created_at: string
          id: number
          tag_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          tag_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          tag_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_recipe_cards: {
        Args: {
          input_user_id: number
        }
        Returns: {
          recipe_name: string
          duration: number
          img_link: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
